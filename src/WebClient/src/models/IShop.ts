import SocialNameEnum from "./SocialNameEnum";

export default interface IShop {
    shopId: string
    shopName: string
    city: string
    address: string
    description: string
    iconLink: string
    shopUrls: [{
        url: string,
        socialName: SocialNameEnum
    }]
    rate: number
}