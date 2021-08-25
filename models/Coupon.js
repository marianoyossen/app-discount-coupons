class Coupon {
    constructor(id, commerceName, title, originalPrice, discountPrice, description, imageURL, category, featured, stock) { 
    this.id = id.toString();
      this.commerceName = commerceName;
      this.title = title;
      this.originalPrice = originalPrice;
      this.discountPrice = discountPrice;
      this.description = description;
      this.imageURL = imageURL;
      this.category = category;
      this.featured = featured;
      this.stock = stock;
    }
  }
  
  export default Coupon;

  