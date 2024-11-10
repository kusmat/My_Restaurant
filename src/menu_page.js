import "./menu_page_styles.css";
export const menu_page = ()=>{


    const header = document.querySelector("header");
    let div_add = document.createElement("div");
    div_add.setAttribute("id", "header_content");
    div_add.setAttribute("class", "");
    header.appendChild(div_add);
    
const content = document.querySelector("#content");

const create_child_with_class_and_id = (child_element, class_name, id_name)=>
    {
    let element = document.createElement(child_element);
    element.setAttribute("id",id_name);
    element.setAttribute("class",class_name);
    return element;
}

content.appendChild(create_child_with_class_and_id("div", "content_section", "content_breakfast_section"))
content.appendChild(create_child_with_class_and_id("div", "content_section", "content_lunch_section"))
content.appendChild(create_child_with_class_and_id("div", "content_section", "content_dinner_section"))

let content_section_selected = document.querySelector("#content_breakfast_section");
content_section_selected.appendChild(create_child_with_class_and_id("h2", "content_section_heading", "content_section_heading_breakfast"));
document.querySelector("#content_section_heading_breakfast").textContent = "Breakfast Menu";
content_section_selected = document.querySelector("#content_lunch_section");
content_section_selected.appendChild(create_child_with_class_and_id("h2", "content_section_heading", "content_section_heading_lunch"));
document.querySelector("#content_section_heading_lunch").textContent = "Lunch Menu";
content_section_selected = document.querySelector("#content_dinner_section");
content_section_selected.appendChild(create_child_with_class_and_id("h2", "content_section_heading", "content_section_heading_dinner"));
document.querySelector("#content_section_heading_dinner").textContent = "Dinner Menu";


}



// image_section.appendChild(image);
// export const greeting = (text)=>{alert(text)}

