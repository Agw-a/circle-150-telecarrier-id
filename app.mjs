function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  const val = document.getElementById('val');
  val.onclick = function(e) {
    e.preventDefault();

    const phone = document.getElementById("phone");

    if (String(phone.value).length < 7) {

      const icon = document.getElementById('icon')
      icon.innerText = `INVALID FORMAT NUMBER`;
      return;
    }
    console.log(phone.value);

    const network = {
      '+234810': 'MTN',
      '+234803': 'MTN',
      '+234703': 'MTN',
      '+234903': 'MTN',
      '+234806': 'MTN',
      '+234706': 'MTN',
      '+234813': 'MTN',
      '+234814': 'MTN',
      '+234816': 'MTN',
      '+234805': 'GLO',
      '+234705': 'GLO',
      '+234905': 'GLO',
      '+234807': 'GLO',
      '+234815': 'GLO',
      '+234811': 'GLO',
      '+234809': 'ETISALAT',
      '+234909': 'ETISALAT',
      '+234817': 'ETISALAT',
      '+234818': 'ETISALAT',
      '+234802': 'AIRTEL',
      '+234902': 'AIRTEL',
      '+234701': 'AIRTEL',
      '+234808': 'AIRTEL',
      '+234708': 'AIRTEL',
      '+234812': 'AIRTEL',
      '+234904': 'AIRTEL'
    }



    let value = '';

    value = String(phone.value).slice(0, 7);

    console.log(value)
    if (network[value] == 'MTN') {

      const img = document.createElement('img');
      img.src = "mtn.png";
      img.alt = "mtn everywhere you go";
      img.style.width = '40px';
      img.style.height = '40px';
      img.style.paddingTop = '15px';
      img.id = 'img';
      const icon = document.getElementById('icon')
      icon.innerText = `This is an ${network[value]} NUMBER `;
      document.getElementById('icon').appendChild(img);

    
     } else if (network[value] == 'GLO') {
       const img = document.createElement('img');
        img.src = "glo.png";
       img.alt = "rule your world";
        img.style.width = '40px';
         img.style.height = '40px';
        img.style.paddingTop = '15px';
          const icon = document.getElementById('icon')
        icon.innerText = `This is an ${ network[value]} NUMBER `;
       document.getElementById('icon').append(img);

     } else if (network[value] == 'AIRTEL') {
         const img = document.createElement('img');
        img.src = "airtel.png";
         img.alt = "The smartphone network";
        img.style.width = '40px';
        img.style.height = '40px';
         img.style.paddingTop = '15px';
          const icon = document.getElementById('icon')
         icon.innerText = `This is an ${ network[value]} NUMBER `;
      document.getElementById('icon').append(img);
     } else if (network[value] == 'ETISALAT') {
         const img = document.createElement('img');
         img.src = "etisalat.png";
         img.alt = "9ja for life";
         img.style.width = '40px';
         img.style.height = '40px';
         img.style.paddingTop = '15px';
         const icon = document.getElementById('icon')
       icon.innerText = `This is an ${ network[value]} NUMBER `;
     document.getElementById('icon').append(img);
     }

  }


};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //