async function load() {
  let url = "https://graph.facebook.com/v17.0/637813958452337/likes?access_token=EAADAS1UL4j4BOywk7F6X7XYVRbrmIcE3k7kpr2fuTQzvIt4ZAYjdMAcrEuydLdMgi64npj9NDFZADuoDhAs9ZCbz90m3v2a897B9flwDl9GvjF82fsmEzE4UyVe8pRut1CJOG7Tru9A8jLt6YDqL9ffd41pxXOlexfejGBYT1z7EZCdaHsSn2piSGDZCxZBaIPHbCobtvjVuANTiws77HkGBmtldwsD9Gxk5VTZBRZAxZBj9AS4KZC0khscp6ZCoKmEfgZDZD";
  await fetch(url).then(async (response) => console.log(await response.json())).catch((error) => {
    console.error("Error:", error);
  });
}
export {
  load
};
