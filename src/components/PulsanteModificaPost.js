import { Button } from "antd";
import { useState } from "react";
import ModificaPost from "./ModificaPost"

const PulsanteModificaPost = ({item, modifica}) =>
    {
        const [isOpen, setisOpen] = useState(false);
        return(
            <>
                <ModificaPost
                visible={isOpen}
                onCancel={() => setisOpen(false)}
                item={item}
                modifica={modifica}
                />
            <Button type="link" onClick={() => {setisOpen(true); console.log("Entra")}}> Modifica</Button>
            </>

        );
    }

    export default PulsanteModificaPost;