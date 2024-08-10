export class Services {
    title: string;
    description: string;
    createdDate: Date;
    imageUrl: string;
    
    constructor(title: string, description: string, imageUrl: string, createdDate: Date) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.createdDate = createdDate;
      
    }
  }