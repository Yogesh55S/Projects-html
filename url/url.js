document.getElementById('shorten-btn').addEventListener('click', function() {
  var input = document.getElementById('url-input');
  var url = input.value;
  if (url === '') return;

  // Simple URL validation
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(#[-a-z\\d%_.~+=]*)$', 'i'); // fragment locater
  if (!pattern.test(url)) {
      alert('Invalid URL');
      return;
  }

  // Shorten the URL using the bit.ly API
  var bitlyApiKey = 'YOUR_BITLY_API_KEY';
  var bitlyApiEndpoint = 'https://api-ssl.bit.ly/v3/shorten';

  var xhr = new XMLHttpRequest();
  xhr.open('POST', bitlyApiEndpoint, true);
  xhr.setRequestHeader('Authorization', 'Bearer ' + bitlyApiKey);
  xhr.setRequestHeader('Content-Type', 'application/json');

  var data = {
      'long_url': url,
      'domain': 'bit.ly'
  };

  xhr.send(JSON.stringify(data));

  xhr.onload = function() {
      if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var shortUrl = response.link;
          document.getElementById('result').innerHTML = 'Short URL: <a href="' + shortUrl + '">' + shortUrl + '</a>';
      } else {
          alert('Error shortening URL');
      }
  };
});