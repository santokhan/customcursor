/** Custom Cursor */
function customCursor() {
    const cursor = document.createElement("DIV");
    cursor.className = "custom-cursor";
    cursor.id = "customCursor";

    const css = {
        position: "fixed",
        left: "50%",
        top: "50%",
        width: "1.5rem",
        height: "1.5rem",
        backgroundColor: "transparent",
        border: "1px solid #000",
        borderRadius: "100%",
        mixBlendMode: "normal",
        transform: "translate(0)",
        transition: "all 0.2s ease-out",
        zIndex: 5000,
        pointerEvents: "none",
    }

    function addCSS(props) {
        Object.assign(cursor.style, props);
    }

    function appendCursor() {
        document.body.insertAdjacentElement("afterbegin", cursor);
        addCSS(css);
        Listeners(); // listener called here
    } appendCursor();

    function Listeners() {
        document.addEventListener("mousemove", function (e) {
            let mouse = e;
            css.left = `${mouse.clientX}px`;
            css.top = `${mouse.clientY}px`;
            // css.transform = `translateX(calc(${mouse.clientX} - 50%)) translateY(calc(${mouse.clientY} - 50%))`;
            css.transform = `translate(-50%,-50%)`;
            addCSS(css);
        });

        const aTag = document.querySelectorAll("a");
        aTag.forEach(tag => {
            tag.addEventListener("mouseover", function () {
                css.width = "3rem";
                css.height = "3rem";
                addCSS(css);
            });
            tag.addEventListener("mouseleave", function () {
                css.width = "1.5rem";
                css.height = "1.5rem";
                addCSS(css);
            });
        });
    }
}
setTimeout(() => { customCursor() }, 1000);
