import bp_logo from "./bp_logo.svg";
import "./contact_page_styles.css";
export const contact_page = ()=>{


const header = document.querySelector("header");
let div_add = document.createElement("div");
div_add.setAttribute("id", "header_content");
div_add.setAttribute("class", "");
header.appendChild(div_add);

const header_content = document.querySelector("#header_content");
div_add = document.createElement("div");
div_add.setAttribute("id", "");
div_add.setAttribute("class", "heading");
header_content.appendChild(div_add);

const heading = document.querySelector(".heading");
div_add = document.createElement("div");
div_add.setAttribute("id", "");
div_add.setAttribute("class","heading_image");
heading.appendChild(div_add);

const heading_image = document.querySelector(".heading_image");
const image = document.createElement("img");
image.src = bp_logo;
heading_image.appendChild(image);

div_add = document.createElement("div");
div_add.setAttribute("id", "");
div_add.setAttribute("class","heading_text");
heading.appendChild(div_add);

const heading_text = document.querySelector(".heading_text");
let h2_add = document.createElement("h2");
h2_add.setAttribute("class","heading_text_title")
heading_text.appendChild(h2_add)

const heading_text_title = document.querySelector(".heading_text_title")
heading_text_title.textContent = "Boston Pizza celebrates 60 years after first restaurant opening!"

div_add = document.createElement("div");
div_add.setAttribute("id","")
div_add.setAttribute("class","heading_text_description")
heading_text.appendChild(div_add)
const heading_text_description = document.querySelector(".heading_text_description")
heading_text_description.textContent = `A Restaurant, Sports Bar and Patio Boston Pizza is three great concepts under one roof!
                    Since opening our first location in Edmonton, Alberta in 1964, Boston Pizza has offered guests two experiences under one roof – a family-friendly casual dining restaurant and a separate sports bar with a lively atmosphere. No matter which side you select, Boston Pizza serves up an extensive menu with many items to choose from.
                    
                    While we’re famous for our gourmet pizzas made with our signature hand pressed dough, our extensive menu satisfies every appetite with our mouth-watering pasta dishes and a wide variety of, salads, entrées and desserts.
                    
                    The casual atmosphere, combined with big-screen high-definition TVs in the sports bar, makes Boston Pizza as fun for families as it is for teams and groups of all ages. Most of our restaurants also feature an outdoor patio for those days when guests want to sit back and soak up the sun.
                    
                    Boston Pizza has more locations, serving more guests annually than any other casual dining concept in the country. Each year, more than 40 million guests are served across more than 365 locations in Canada.
                    
                    BPI is Canada’s number one casual dining brand.  The Boston Pizza brand has served communities from coast-to-coast for over 60 years since opening its first restaurant in Edmonton, Alberta in 1964.  Today Boston Pizza proudly remains a Canadian company with its hundreds of local franchise owners operating more dining rooms, sports bars and patios than any other single brand in the country, along with take-out and delivery.  BPI has been recognized as a Platinum Member of Canada’s 50 Best Managed Companies for 30 years, is recognized as a Great Place to Work and has been a Franchisees’ Choice Designation winner for eight consecutive years.`


}
