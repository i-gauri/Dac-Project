import React from 'react';
import './Pages/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer';

function About() {
    return (
        <div>
            {/* <section class="">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="Images/banner-1.jpg" alt="First slide" style={{ height: "auto" }} />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 " src="Images/banner-1.jpg" alt="Second slide" style={{ height: "auto" }} />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="Images/banner-1.jpg" alt="Third slide" style={{ height: "auto" }} />
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="bg-light" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <h3 class="text-center mt-4 text-secondary">Know about us</h3>
                        </div>
                    </div>
                    <div class="row">
                        <p class="mt-4 mb-5">Dream Planner Ltd is an event planners and management company which    was formed back in 2020. The company offers A-Z event planning services from a team of experienced and energetic event planners, suppliers, venues and more. One of the main reasons behind the success of Event Planner is the fact that the team does not charge fees to its clients! With the number of events we organise, Dream Planner Ltd does not need to add exorbitant fees and mark-ups to make its profit margins. This ensures that our clients list, which is constantly growing, make regular use of our services.</p>
                    </div>
                </div>
            </section>

            <section class="" id="destinations">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <h3 class="text-center mt-4 text-secondary">Favourite Venues</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/a1.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Jodhpur Palace</h4>
                                    <p class="card-text text-secondary">A part of the palace is managed by Taj Hotels. Named after Maharaja Umaid Singh, grandfather of the present owner Gaj Singh. The palace has 347 rooms and is the principal residence of the former Jodhpur royal family..</p>
                                </div>
                                {/* <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div> */}
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/a2.png" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Jaipur Palace</h4>
                                    <p class="card-text text-secondary">The Palace was also the location of religious and cultural events, as well as a patron of arts, commerce, and industry. It now houses Maharaja Sawai Man Singh II Museum, continues to be the home of the Jaipur royal family..</p>
                                </div>
                                {/* <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div> */}
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="Images/a4.jpg" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Neemrana Palace</h4>
                                    <p class="card-text text-secondary">Built since 1464, abandoned in 1947, acquired in 1986, this splendid ruin restored into an exquisite resort near Delhi, opened in 1991. Today it has 77 rooms/suites spread over 14 levels cut into the hill.</p>
                                </div>
                                {/* <div class="card-footer">
                          <a href="#" class="btn btn-primary">Find Out More!</a>
                       </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="" id="places">
                <div class="container">
                    <div class="col-sm-12 col-md-12 mb-4">
                        <h3 class="text-center text-secondary mt-4">Places and Description</h3>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       Destination Weddings
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    But, as I did a little more digging, I found there is an actual definition that states a destination wedding is defined as “a wedding where the couple marries at least 100 miles from where they live.” This means a destination wedding can be a wedding held in a setting away from your home.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Beach Side Wedding
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                A wedding is a ceremony where two people are united in marriage. ... Most wedding ceremonies involve an exchange of marriage vows by a couple, presentation of a gift (offering, rings, symbolic item, flowers, money, dress), and a public proclamation of marriage by an authority figure or celebrant
                                </div>
                            </div>
                        </div>
                        {/* <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Best Heritages
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>


            <section class="bg-light mt-5" id="tourist">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-sm-12 col-md-12 mb-4">
                            <h3 class="text-center mt-4 text-secondary">Developed By</h3>
                        </div>
                        <div class="col-md-6">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <h4 class="font-weight-bold dark-grey-text mt-4">Gauri Kshirsagar</h4>
                                <h6 class="font-weight-bold blue-text my-3">Developer</h6>
                                <p class="font-weight-normal dark-grey-text">
                                Sharp-Witted, Ambitious and Self-Reliant 
                                    </p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="testimonial mb-5">
                                <div class="avatar mx-auto">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <h4 class="font-weight-bold dark-grey-text mt-4">Pushkaraj Sharma</h4>
                                <h6 class="font-weight-bold blue-text my-3">Developer</h6>
                                <p class="font-weight-normal dark-grey-text">
                                    Technologically Competent, Ethical and Go-getter
                                </p>
                            </div>

                        </div>
                        {/* <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
          <h6 class="font-weight-bold blue-text my-3">Toursit</h6>
          <p class="font-weight-normal dark-grey-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div> */}
                    </div>
                </div>
            </section>
            {/* <Footer/> */}
        </div>
    );
}

export default About
