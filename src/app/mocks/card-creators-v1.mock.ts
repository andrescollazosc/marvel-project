
import { CardCreatorsV1Model } from '../models/card-creators-v1.model';
export class CardCreatorsV1Mock {
    
    /**
     * getCreators
 :     */
    public static getCreators(): CardCreatorsV1Model[] {
        return [
            {
                name: 'Alejandro Martinez',
                title: 'Full Stack Developer',
                img: '../../../assets/img/creators/Alejandro.jpeg',
                url: 'https://bamartinezd.github.io/Tricky-Game/',
                socialMediaGitHub: 'https://github.com/bamartinezd', 
                socialMediaLinkeIn: 'https://www.linkedin.com/in/bamartinezd'
            },
            {
                name: 'Andres Collazos',
                title: 'Full Stack Developer',
                img: '../../../assets/img/creators/ACC - 1.jpg',
                url: 'https://andrescollazosc.github.io/proj-services-briefcase/',
                socialMediaGitHub: 'https://github.com/andrescollazosc', 
                socialMediaLinkeIn: 'https://www.linkedin.com/in/andres-collazos-66454076/'
            }
        ];
    }

}