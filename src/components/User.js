const User = (props) => {
  return (
    <section
      className="section-single-result py-4"
      id="section-single-result"
    >
      <div className="container">
        <div className="row user">
          <div className="col-md-6">
            <div className="user__detail card">
              <div className="card-header">User</div>
              <div className="card-body">
                <div className="row gx-3 align-items-center">
                  <div className="col-2">
                    <img
                      src={props.user.avatar_url}
                      alt="avatar"
                      className="img-fluid rounded-circle user__avatar"
                    />
                  </div>
                  <div className="col-8">
                    <h4 className="user__fullname">{props.user.name}</h4>
                    <p className="user__twitter">@{props.user.twitter_username}</p>
                  </div>
                  <div className="col-2">
                    <a
                      href={props.user.html_url}
                      className="btn btn-block btn-outline-primary user__follow-btn"
                      target="_blank"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                <p className="user__bio my-3">{props.user.bio}</p>
                <p className="user__company mb-1">
                  <span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-building me-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                  </span>
                  <span className="text">{props.user.company || 'No company'}</span>
                </p>
                <p className="user__location mb-1">
                  <span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-geo-alt-fill me-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                  </span>
                  <span className="text">{props.user.location}</span>
                </p>
                <p className="user__website mb-1">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-link me-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                  </svg>
                  <a
                    href={props.user.blog}
                    target="_blank"
                    className="text-decoration-none"
                  >
                    {props.user.blog}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="user__info card">
              <div className="card-header">Details</div>
              <div className="card-body">
                <div className="row gx-5">
                  <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="col-auto user__info-icon mr-4">
                      <div className="icon icon--green">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-journal-code"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                          <path
                            fillRule="evenodd"
                            d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col">
                      <h3
                        id="user__repositories"
                        className="mb-0"
                      >
                        {props.user.public_repos}
                      </h3>
                      <p className="mb-0">Repositories</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="col-auto user__info-icon mr-4">
                      <div className="icon icon--red">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-person-plus"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col">
                      <h3
                        id="user__followers"
                        className="mb-0"
                      >
                        {props.user.followers}
                      </h3>
                      <p className="mb-0">Followers</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="col-auto user__info-icon mr-4">
                      <div className="icon icon--orange">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-star"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col">
                      <h3
                        id="user__following"
                        className="mb-0"
                      >
                        {props.user.following}
                      </h3>
                      <p className="mb-0">Following</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="col-auto user__info-icon mr-4">
                      <div className="icon icon--azure-blue">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-code-square"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col">
                      <h3
                        id="user__gists"
                        className="mb-0"
                      >
                        {props.user.public_gists}
                      </h3>
                      <p className="mb-0">Gists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
