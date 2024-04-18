import layoutComponentLogic from "./layout-component-logic";

const cardsDisplayLogic = (showBy, sortedKeys, allProfiles, layout) => {
    let cards = [];
    if(showBy.byTrack.value === 'all'){
        cards = sortedKeys.map((objKey, idx) => {
            return layoutComponentLogic(layout, objKey, idx);
        })
    }
    else if(showBy.byTrack.value === 'onTrack'){
        const meetsTrackFilter = sortedKeys.filter(objKey => {
            const {codewars: {current: {total}}, certifications: {resume, linkedin, github, mockInterview}} = allProfiles[objKey];
            const onTrack = resume && linkedin && github && mockInterview && (total > 600);
            if(onTrack){
                return true;
            }
        });
        cards = meetsTrackFilter.map((objKey, idx) => {
            return layoutComponentLogic(layout, objKey, idx);
        })
    }
    else{
        const meetsTrackFilter = sortedKeys.filter(objKey => {
            const {codewars: {current: {total}}, certifications: {resume, linkedin, github, mockInterview}} = allProfiles[objKey];
            const onTrack = resume && linkedin && github && mockInterview && (total > 600);
            if(!onTrack){
                return true;
            }
        });
        cards = meetsTrackFilter.map((objKey, idx) => {
            return layoutComponentLogic(layout, objKey, idx);
        })
    }
    return cards;
}

export default cardsDisplayLogic;