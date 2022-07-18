import { CAMSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () =>{
    return CAMSITES;
}

export const selectRandomCampsite = () =>{
    return CAMSITES[Math.floor(CAMSITES.length * Math.random)];
}