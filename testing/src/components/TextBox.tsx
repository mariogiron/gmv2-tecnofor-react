import { useState } from "react";

const TextBox = () => {

    const [bgColor, setBgColor] = useState('indigo');

    return <div>
        <article title="parrafo principal" style={{
            backgroundColor: bgColor
        }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sed ex rerum porro temporibus! Neque dicta nulla, alias, fuga voluptate at inventore voluptatem placeat quia suscipit, laborum quos est explicabo?
        </article>
        <button onClick={() => setBgColor('tomato')}>Pulsa para modificar</button>
    </div>
}

export default TextBox;