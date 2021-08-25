import * as SQLite from 'expo-sqlite';
import { COUPONS } from '../data/coupons';

const bd = SQLite.openDatabase('coupons.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        
        const coupons = COUPONS;
        const sql = 'INSERT OR REPLACE INTO coupons (id, commerceName, title, originalPrice, discountPrice, description, imageURL, category, featured, stock) ' + 'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        bd.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS coupons (
                    id INTEGER PRIMARY KEY NOT NULL,
                    commerceName TEXT NOT NULL,
                    title TEXT NOT NULL,
                    originalPrice REAL NOT NULL,
                    discountPrice REAL NOT NULL,
                    description TEXT NOT NULL,
                    imageURL TEXT NOT NULL,
                    category TEXT NOT NULL,
                    featured BOOL NOT NULL,
                    stock INTEGER NOT NULL
                )`,
                [],
                () => { resolve() },
                (_, err) => { reject(err) },
            )

            //Actualización de Base de Datos local
            for (var item in coupons) {
                const params = [coupons[item].id, coupons[item].commerceName, coupons[item].title, coupons[item].originalPrice, coupons[item].discountPrice, coupons[item].description, coupons[item].imageURL, coupons[item].category, coupons[item].featured, coupons[item].stock];
                tx.executeSql(sql, params, () => { resolve() }, (_, err) => { reject(err) });
            }
            
        });        

    });
    return promise;
}

export const insertCoupon = (
    commerceName,
    title,
    originalPrice,
    discountPrice,
    description,
    imageURL,
    category,
    featured,
    stock
) => {
    const promise = new Promise(( resolve, reject ) => {
        bd.transaction(tx => {
            tx.executeSql(
                `INSERT INTO coupons (commerceName, title, originalPrice, discountPrice, description, imageURL, category, featured, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [commerceName, title, originalPrice, discountPrice, description, imageURL, category, featured, stock],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            );
        });
    });

    return promise;
}

export const fetchCoupons = () => {
    const promise = new Promise((resolve, reject) => {
        bd.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM coupons;`,
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            );
        });
    });

    return promise;
}   
