const SparkPost = require('sparkpost');
// const sparky = new SparkPost('<YOUR API KEY>');

  async function emailHandler(req,res){
      const client = new SparkPost(process.env.SPARKPOST)
      const data = JSON.parse(req.body)
      const {email,regno} = body

      client.transmissions.send({
        content: {
            from: 'chrisnwang56@gmail.com',
            subject: 'Acceptance Letter',
            html:'<html><body><p>Dear Sir/Madam,</br> This is to confirm that the bearer of this letter ${regno} of Registration Number {} has been admitted to attend Industrial Training in Computerized Accountig and Finance Management from our company premises. The training is </p></body></html>'
          },
          recipients: [
            {address: email}
          ]
        })
        .then(data => {
          console.log('Woohoo! You just sent your first mailing!');
          console.log(data);
        })
        .catch(err => {
          console.log('Whoops! Something went wrong');
          console.log(err);
        });
      }
  