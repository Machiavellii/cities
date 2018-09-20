export function getCities() {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/cities?&country=rs&&sign=true`
  ).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('Unable to fetch');
    }
  });
}

export function getMeetup(name) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/open_events?&sign=true&photo-host=public&country=rs&city=${name}&page=20&key=YOURAPIKEY
  `).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('Unable to fetch');
    }
  });
}
