import Card from "../Components/Card";
import Picture from "../Components/Picture";
import FullName from "../Components/FullName";

const layoutComponentLogic = (layout, objKey, idx) => {
    if(layout === 'grid'){
        return (
            <Card key = {idx} objKey = {objKey}/>
        )
    }
    else if(layout === 'picture'){
        return (
            <Picture key = {idx} objKey = {objKey}/>
        )
    }
    else{
        return (
            <FullName key = {idx} objKey = {objKey}/>
        )
    }
}

export default layoutComponentLogic;