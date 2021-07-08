import { HomeCardModel } from '../models/home-card.model';
export class CardHomeMock {
    
    /**
     * name
     */
    public static getInitialDataCardHome(): HomeCardModel {
        return {
            title: 'Marvel',
            img: '../../../assets/img/Avengers.jpg',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem facilis, itaque minima esse architecto ipsum quam quo impedit perspiciatis mollitia unde? Doloribus dicta quod quam libero molestias sed accusamus aperiam!'
        };
    }

}