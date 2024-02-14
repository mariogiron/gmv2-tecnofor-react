import { useEffect, useState } from "react";

const Scroll = () => {

    const [currentScroll, setCurrentScroll] = useState(window.scrollY);

    useEffect(() => {
        function onScroll() {
            setCurrentScroll(window.scrollY);
            console.log('onScroll', currentScroll);
        }
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'black', color: 'white', left: 0 }}>
        Scroll: {currentScroll}
    </div>

}

export default Scroll;