import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import TouchableComponent from '../TouchableComponent';
import { cardStyles } from './CardStyles';

const CardItem = ({ item, onSelected }) => { 
    return (
        <View>
            <Card>
                <Card.Title style={cardStyles.cardTitle}>{item.commerceName}</Card.Title>
                <View style={cardStyles.contentSubtitle}><Text style={cardStyles.cardSubtitle}>{item.title}</Text></View>
                <Card.Divider/>
                <Card.Image source={item.imageURL} />
                <Text style={cardStyles.cardText}>
                    {item.description}
                </Text>
                <Text style={cardStyles.cardTextOriginalPrice}>
                    Precio original: <Text style={{textDecorationLine: 'line-through'}}>${item.originalPrice}</Text>
                </Text>
                <Text style={cardStyles.cardTextDiscountPrice}>
                    Precio con descuento: ${item.discountPrice}
                </Text>
                <TouchableComponent onPress={() => onSelected(item)}>
                <View style={cardStyles.ViewMore}>
                   <Text> VER MÁS </Text>
                </View>
                </TouchableComponent>
            </Card>           
        </View>  
    );
}

export default CardItem;