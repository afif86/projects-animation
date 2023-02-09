
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

const elements = document.querySelectorAll('a');

elements.forEach(element => {
    element.addEventListener('mouseover', e => {
        cursor.classList.add("expand");

        e.target.addEventListener('mouseout', e => {
            cursor.classList.remove("expand");
        })
    });
});
