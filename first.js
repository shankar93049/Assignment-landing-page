
 src="https://code.jquery.com/jquery-3.6.0.min.js">

$(document).ready(function() {
  // Hover effect on footer links
  $(".footer-links a, .footer-social a").hover(function() {
    $(this).css("color", "red");
  }, function() {
    $(this).css("color", "blue");
  });

  // Scroll to top on footer click (demo effect)
  $(".footer-bottom").click(function() {
    $('html, body').animate({ scrollTop: 0 }, "slow");
  });
});



$(document).ready(function(){
    $('body').click(function(){
      $(this).css('background-color','skyblue');
    });
  });


$(document).ready(function() {
    const cards = [
        {
            title: "UI/UX developer",
            image: "crd1.png",
            description: "focuses on creating and implementing user interfaces and user experiences for digital products like websites and mobile apps"
        },
        {
            title: "Software developers",
            image: "crd2.png",
            description: "refers to a formal process of changing the ownership records of a restaurant, specifically its legal title and registry with "
        },
        {
            title: "Digital marketing",
            image: "crd3.png",
            description: "Digital marketing involves using internet and online technologies to promote products and services the promotion of brands to "
        },
        {
            title: "Data scientists",
            image: "crd4.png",
            description: "Data scientists are professionals who use data to understand and explain phenomena, and help organizations make better decisions"
        },
        {
            title: "AI/ML",
            image: "crd5.png",
            description: "Leverage KvonTech’s expertise in RPA, AI/ML, and product development, proven through over 500 successful solutions, to advance your company with cutting-edge Tech."
        },
        {
            title: "Devops",
            image: "crd6.png",
            description: "DevOps solutions enable agile market opportunities, continuous deployment, and seamless scaling, reducing costs and fostering exponential growth."
        }

    ];

    cards.forEach(card => {
        $('#card-container').append(`
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${card.image}" class="card-img-top" alt="${card.title}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        `);
    });
});