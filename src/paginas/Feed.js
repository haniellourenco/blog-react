import Corpo from "../componentes/Corpo";
import Posts from "../componentes/Posts";

export default function Feed() {
    return(

        <Corpo menu={true}>
            <Posts/>
        </Corpo>

    );
}