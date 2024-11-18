export default function makeMarkup(pictArray) {
  return pictArray
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
            <li class="gallery-item">
                <div class="gallery-item-imgblock imgblock">
                    <a class="img-link" href="${largeImageURL}">
		                <img 
			                class="gallery-image" 
			                src="${webformatURL}" 
			                alt="${tags}" 
			            />
	                </a>
                </div>
                <ul class="gallery-info info-list">
                    <li class="info-item">
                        <h6>Likes</h6>
                        <p>${likes}</p>
                    </li>
                    <li class="info-item">
                        <h6>Views</h6>
                        <p>${views}</p>
                    </li>
                    <li class="info-item">
                        <h6>Comments</h6>
                        <p>${comments}</p>
                    </li>
                    <li class="info-item">
                        <h6>Downloads</h6>
                        <p>${downloads}</p>
                    </li>
                </ul>
            </li>
        `;
      }
    )
    .join('');
}
