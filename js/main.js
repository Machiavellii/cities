import { getCities, getMeetup } from './requests';

getCities().then(cities => {
  const results = document.querySelector('#result');

  cities.results.forEach(city => {
    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'mb-3');

    div.innerHTML = `
              <div class="row">
              <div class="col-sm-8">
                      <h2>
                      ${city.city} , ${city.localized_country_name}
                      </h2>              
                       <p> For more information about meet up <button type="button"  class="button " data-toggle="modal" data-target=".bd-example-modal-lg" value='${
                         city.city
                       }'>click here</button></p> 
                      
                  </div>
              </div>
      `;
    results.appendChild(div);
  });

  let btns = document.querySelectorAll('button');
  let allbtn = btns.length;
  for (let i = 0; i < allbtn; i++) {
    btns[i].addEventListener('click', e => {
      const value = btns[i].value;
      console.log(value);
      getMeetup(value)
        .then(event => {
          const popup = document.querySelector('#popup');
          popup.innerHTML = '';
          event.results.forEach(event => {
            const time = moment(event.time).format('LLLL');

            const divEvent = document.createElement('div');

            divEvent.innerHTML = `
              <div class="card" >
              <img class="card-img-top" src=${
                event.photo_url
              }  alt="Card image cap">
              <div class="card-header">
               ${time}
              </div>
              <div class="card-body">
              <h5 class="card-title text-center mb-4">${event.name}</h5>
                <p class="card-text">${event.description}</p>
              </div>
            </div>
              `;
            popup.appendChild(divEvent);
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
});
