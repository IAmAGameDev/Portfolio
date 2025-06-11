const data = [
  {
    videoPath: 'videos/myVideos/Bloom.mp4',
    projectTitle: 'Bloom',
    projectDescription:
      'Bloom is a cute cosy flower arrangement game in which you have to take over your Grandmothers flower shop in order to raise money. It requires you to talk to your customers to understand what occasion they are buying flowers for such as an anniversary, then make a connection within a time limit for example any flowers that are the colour red and arrange a beautiful bouquet.',
    itchioLink: '',
    githubLink: '',
    tags: ['C#', 'Unity', 'UI UXML', 'Visual Studio', 'Personal Project'],
  },
  {
    videoPath: 'videos/myVideos/Bloom.mp4',
    projectTitle: 'Bloom',
    projectDescription:
      'Bloom is a cute cosy flower arrangement game in which you have to take over your Grandmothers flower shop in order to raise money. It requires you to talk to your customers to understand what occasion they are buying flowers for such as an anniversary, then make a connection within a time limit for example any flowers that are the colour red and arrange a beautiful bouquet.',
    itchioLink: '',
    githubLink: '',
    tags: ['C#', 'Unity', 'UI UXML', 'Visual Studio', 'Personal Project'],
  },
];

const projectBox = document.querySelector('.projects-section');

data.forEach((element) => {
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('class', 'project-div');

  const videoContainer = document.createElement('div');
  videoContainer.setAttribute('class', 'video-container');
  const video = document.createElement('video');
  video.setAttribute('controls', '');
  video.setAttribute('src', element.videoPath);
  video.setAttribute('width', '420');
  videoContainer.append(video);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.setAttribute('class', 'description-container');
  const title = document.createElement('p');
  title.textContent = element.projectTitle;

  const description = document.createElement('p');
  description.textContent = element.projectDescription;

  descriptionContainer.append(title);
  descriptionContainer.append(description);

  const buttonsDiv = document.createElement('div');
  const readMore = document.createElement('button');
  const itchioLink = document.createElement('button');
  const githubLink = document.createElement('button');

  buttonsDiv.append(readMore);
  buttonsDiv.append(itchioLink);
  buttonsDiv.append(githubLink);

  descriptionContainer.append(buttonsDiv);

  const tagsDiv = document.createElement('div');
  element.tags.forEach((tagElement) => {
    const tag = document.createElement('p');
    tag.setAttribute('class', 'tag');
    tag.textContent = tagElement;
    tagsDiv.append(tag);
  });

  descriptionContainer.append(tagsDiv);

  projectDiv.append(videoContainer);
  projectDiv.append(descriptionContainer);

  projectBox.appendChild(projectDiv);
});
