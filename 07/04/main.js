const template = document.querySelector('template');
const repositoriesElement = 'content' in template ? template.content : template;
const cardElement = repositoriesElement.querySelector('.repositories__card');
const newCardsElement = document.querySelector('.newCards');
const loadElement = document.querySelector('.load');

let pageNumber = 1;
let isLoad = true;

const makeCard = card => {
  const newCard = cardElement.cloneNode(true);
  const date = new Intl.DateTimeFormat('ru');

  newCard.querySelector('.repositories__card__name').textContent += card.name;
  newCard.querySelector('.repositories__card__name').href = card.html_url;
  newCard.querySelector('.repositories__card__description').textContent += card.description;
  newCard.querySelector('.repositories__card__link').textContent += card.html_url;
  newCard.querySelector('.repositories__card__link').href = card.html_url;
  newCard.querySelector('.repositories__card__date').textContent += date.format(new Date(card.created_at));
  newCard.querySelector('.repositories__card__commit').textContent += date.format(new Date(card.updated_at));

  return newCard;
};

const renderCards = list => list.forEach(card => newCardsElement.appendChild(makeCard(card)));

const loadData = async page => {
  loadElement.style.display = 'block';
  loadElement.style.position = 'absolute';
  const githubResponse = await fetch(`https://api.github.com/orgs/facebook/repos?page=${page}?`);
  const data = await githubResponse.json();

  loadElement.style.display = 'none';
  loadElement.style.position = 'fixed';

  renderCards(data);
  pageNumber++;
  isLoad = true;
};

window.onscroll = () => {
  const page = document.documentElement;

  const scrollTop = window.pageYOffset && document.documentElement.scrollTop;
  let scrollHeight = page.scrollHeight;
  const clientHeight = page.clientHeight;

  scrollHeight = Math.max(scrollHeight, clientHeight);

  const end = scrollHeight - scrollTop - clientHeight;

  if (end > 0 && isLoad) {
    isLoad = false;
    loadData(pageNumber);
  }
};

loadData(pageNumber);
