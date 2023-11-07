class Project {
	constructor(id, img, name, description, link, type) {
		this.id = id;
		this.img = img;
		this.name = name;
		this.description = description;
		this.link = link;
		this.type = type;
	}
}
const myProjects = [
	new Project(
		1,
		"assets/img/work-1.jpg",
		"Mobiles Shop",
		"Dự án làm quen với HTML, CSS và JavaScript với các tính năng xem danh sách sản phẩm, quản lý giỏ hàng...",
		"https://nhat01479.github.io/CaseStudy_Mobiles_Shop/",
		4
	),
	new Project(
		2,
		"assets/img/work-1.jpg",
		"Mobiles Shop",
		"Dự án làm quen với HTML, CSS và JavaScript với các tính năng xem danh sách sản phẩm, quản lý giỏ hàng...",
		"https://nhat01479.github.io/CaseStudy_Mobiles_Shop/",
		3
	),
];

const btnFilter = document.querySelectorAll(".filter-project");
btnFilter.forEach((btn) => {
	addEventListener("click", () => {});
});

const render = (listProject) => {
	console.log(1111111);
	let myPortfolio = document.getElementById("myPortfolio");
	myPortfolio.innerHTML = "";
	listProject.forEach((project, index) => {
		myPortfolio.innerHTML += `<div class="col-md-4">
    <div class="work-box">
      <a
        href="${project.img}"
        data-gallery="portfolioGallery"
        class="portfolio-lightbox"
      >
        <div class="work-img">
          <img src="${project.img}" alt="" class="img-fluid" />
        </div>
      </a>
      <div class="work-content">
        <div class="row">
          <div class="col-sm-8">
            <h2 class="w-title">${project.name}</h2>
            <div class="w-more">
              <span class="w-ctegory">Web Design</span> /
              <span class="w-date">18 Sep. 2018</span>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="w-like">
              <a href="${project.link}">
                <span class="bi bi-plus-circle"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
	});
};

render(myProjects);
