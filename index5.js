// const code = "(5+5) % 5 === 0";

// console.log(eval(code));

function calcScreenRation(w, h) {
  w = parseInt(w);
  h = parseInt(h);

  let result = w / h;

  if (isNaN(result)) {
    return "Error";
  } else if (!isFinite(result)) {
    return "is Infinity";
  } else {
    return result;
  }
}

console.log(calcScreenRation("1920px", "1000px"));

const num = parseFloat("1.5555");

console.log(num);

const domain = "it-brains.com-ua";

function redirectToPath(path) {
  const link = encodeURI(`https://${domain}/${path}`);
  // робимо перехід на сторінку
  console.log(link);

  return link;
}

const URI =
  "https://it-brains.com-ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info";
function getUrl(urlInURI) {
  urlInURI = decodeURI(urlInURI);
  console.log(urlInURI);

  return urlInURI;
}

const path = "product/Мікрофон рожевий/info";
const link = `https://${domain}/${path}`;

const link1 = redirectToPath(path); // URI

const link2 = getUrl(link1); // Decode URI

console.log(link === link2);
