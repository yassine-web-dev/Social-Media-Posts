// Generate Post Function
function generatePosts() {

    // Get Data
    fetch('https://jsonplaceholder.typicode.com/posts')

        .then((response) => response.json())
        .then((data) => {

            // Reverse the data array
            data = data.reverse();

            data.forEach(info => {

                // Create Elements
                let postContainer = document.createElement('div');
                postContainer.className = 'post-container';

                let headContainer = document.createElement('div');
                headContainer.className = 'head-container';

                let bodyContainer = document.createElement('div');
                bodyContainer.className = 'body-container';

                let footContainer = document.createElement('div');
                footContainer.className = 'foot-container';

                let logo = document.createElement('div');
                let logoText = document.createTextNode('mnmIst.');
                logo.className = 'logo';
                logo.classList.add('monts-black');

                let circleOne = document.createElement('span');
                circleOne.className = 'circle-one';

                let hrElem = document.createElement('hr');
                let textElem = document.createElement('div');
                textElem.className = 'text';

                let circleTwo = document.createElement('span');
                circleTwo.className = 'circle-two';

                let heading = document.createElement('h1');
                let headingText = document.createTextNode(info.title);
                heading.className = 'monts-black'

                let paragraph = document.createElement('p');
                let paragraphText = document.createTextNode(info.body);
                paragraph.className = 'monts-reg';

                let website = document.createElement('span');
                let websiteText = document.createTextNode('www.mnmist.co');
                website.className = 'website';
                website.classList.add('monts-semibold');

                let circleThree = document.createElement('span');
                circleThree.className = 'circle-three';

                let postNumber = document.createElement('div');
                let postNumberCount =  document.createTextNode(padPostNumber(info.id));
                postNumber.className = 'post-number';
                postNumber.classList.add('monts-semibold');

                // Append Elements
                logo.appendChild(logoText);
                headContainer.appendChild(logo);
                headContainer.appendChild(circleOne);

                heading.appendChild(headingText);
                paragraph.appendChild(paragraphText);
                textElem.appendChild(circleTwo);
                textElem.appendChild(heading);
                textElem.appendChild(paragraph);
                bodyContainer.appendChild(hrElem);
                bodyContainer.appendChild(textElem);

                website.appendChild(websiteText);
                postNumber.appendChild(postNumberCount);
                footContainer.appendChild(website);
                footContainer.appendChild(circleThree);
                footContainer.appendChild(postNumber);

                postContainer.appendChild(headContainer);
                postContainer.appendChild(bodyContainer);
                postContainer.appendChild(footContainer);

                document.body.insertBefore(postContainer, document.body.firstChild);
            });
        })
}

// Helper function to pad the post number with leading zeros
function padPostNumber(number) {
    let paddedNumber = number.toString().padStart(2, '0');
    return paddedNumber;
}

// Generate Posts
generatePosts();
console.log(document.body.children);