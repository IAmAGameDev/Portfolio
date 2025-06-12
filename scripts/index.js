const data = [
  {
    videoPath: 'videos/myVideos/StyledHierarchy.mp4',
    projectTitle: 'Styled Hierarchy',
    projectDescription:
      'Ever get bored of the default Unity look? This project solves that by overlapping the default Hierarchy with a custom one with features such as: tree view, headers, displayed: tags, layers and components.',
    links: [
      {
        title: 'Read More',
        link: 'styledHierarchy.html',
      },
      {
        title: 'itch.io',
        link: 'https://iamagamedev.itch.io/styledhierarchy',
      },
      {
        title: 'GitHub',
        link: 'https://github.com/IAmAGameDev/StyledHierarchy',
      },
    ],
    tags: ['C#', 'Unity', 'UI UXML', 'Visual Studio', 'Personal Project'],
  },
  {
    videoPath: 'videos/myVideos/Bloom.mp4',
    projectTitle: 'Bloom',
    projectDescription:
      'Bloom is a cute cosy flower arrangement game in which you have to take over your Grandmothers flower shop in order to raise money. It requires you to talk to your customers to understand what occasion they are buying flowers for. Then you have to arrange flowers within a time limit and make a beautiful bouquet.',
    links: [
      {
        title: 'Read More',
        link: 'bloom.html',
      },
      {
        title: 'itch.io',
        link: 'https://dont-ask-productions.itch.io/bloom',
      },
    ],
    tags: [
      'C#',
      'Unity',
      'Group Project',
      'Visual Studio',
      'University Project',
    ],
  },
];

const projectBox = document.querySelector('.projects-section');

data.forEach((element) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-div');

  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container');
  const video = document.createElement('video');
  video.classList.add('project-video');
  video.src = element.videoPath;
  video.width = 420;
  video.controls = true;
  videoContainer.append(video);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description-container');
  const title = document.createElement('p');
  title.textContent = element.projectTitle;
  title.classList.add('project-title');

  const description = document.createElement('p');
  description.textContent = element.projectDescription;
  description.classList.add('project-description');

  descriptionContainer.append(title);
  descriptionContainer.append(description);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons-div');

  element.links.forEach((linkElement) => {
    const button = document.createElement('a');
    button.classList.add('link-buttons');
    button.href = linkElement.link;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';

    if (linkElement.title === 'Read More') {
      const span = document.createElement('span');
      span.classList.add('material-symbols-outlined');
      span.classList.add('link-image');
      span.textContent = 'read_more';
      button.append(span);
    } else {
      const image = document.createElement('img');
      image.width = '20';
      image.height = '20';
      image.classList.add('link-image');
      if (linkElement.title === 'itch.io') {
        image.src = 'images/itchio-logo-textless-black.svg';
        image.alt = 'itch.io Logo';
      } else {
        image.src = 'images/github-mark.svg';
        image.alt = 'LinkedIn Logo';
      }
      button.append(image);
    }

    const span = document.createElement('span');
    span.classList.add('link-title');
    span.textContent = linkElement.title;
    button.append(span);

    buttonsDiv.append(button);
  });
  descriptionContainer.append(buttonsDiv);

  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('tags-div');
  element.tags.forEach((tagElement) => {
    const tag = document.createElement('p');
    tag.classList.add('tag');
    tag.textContent = tagElement;
    tagsDiv.append(tag);
  });

  descriptionContainer.append(tagsDiv);

  projectDiv.append(videoContainer);
  projectDiv.append(descriptionContainer);

  projectBox.appendChild(projectDiv);
});
