console.log('Starting up');

$(document).ready(onInit)
$('#contact button').click(function () {
  var subject = $('[name=subject]').val()
  var body = $('[name=body]').val()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=annahaskelsky@gmail.com&su=${subject}&body=${body}`, '_blank')
})

function onInit() {
  renderProjs()
  renderSkills()
}

function renderProjs() {
  var projs = getProjects()
  var strHTMLs = ''
  projs.forEach(function (proj) {
    strHTMLs += `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" onclick="getPortfolioModal('${proj.id}')" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="projs/${proj.id}.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`
  })
  $('.portfolio-items').html(strHTMLs)
}

function getPortfolioModal(id) {
  var proj = getProjById(id)
  console.log(proj);
  $('.modal-body h2').text(proj.name)
  $('.item-intro').text(proj.title)
  $('.modal-body img').attr('src', `projs/${id}.png`)
  $('.modal-body img').unbind()
  $('.modal-body img').click(function() {
    window.open(proj.url)
    console.log(proj.url);
  })
  $('.item-description').text(proj.desc)
  $('span.date').text(proj.publishedAt)
  $('span.category').text(getLabels(proj.labels))
}

function getLabels(labels) {
  var str = ''
  labels.forEach(function (label) {
    str += ` ${label} `
  })
  return str
}

function renderSkills() {
  var skills = getSkills()
  var strHTMLs = ''
  skills.forEach(function (skill) {
    strHTMLs +=
      `<div class="col-md-4">
    <span class="fa-stack fa-4x">
        <i class="fa fa-circle fa-stack-2x text-primary"></i>
        <i class="fas fa-${skill.icon} fa-stack-1x fa-inverse"></i>
      </span>
    <h4 class="service-heading">${skill.title}</h4>
    <p class="text-muted">${skill.txt}</p>
  </div>`
  })
  $('.skills-container').html(strHTMLs)
}
