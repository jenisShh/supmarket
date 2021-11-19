import React from 'react'
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p111 from '../assets/images/111.jpg';

function Gallary() {
    return (
        <>
            <div class="ban-bottom-w3l">
					<div class="container">
					<div class="col-md-6 ban-bottom3">
							<div class="ban-top">
								<img src={p2} class="img-responsive" alt=""/>
								
							</div>
							<div class="ban-img">
								<div class=" ban-bottom1">
									<div class="ban-top">
										<img src={p3} class="img-responsive" alt=""/>
										
									</div>
								</div>
								<div class="ban-bottom2">
									<div class="ban-top">
										<img src={p4} class="img-responsive" alt=""/>
										
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div class="col-md-6 ban-bottom">
							<div class="ban-top">
								<img src={p111} class="img-responsive" alt=""/>
								
								
							</div>
						</div>
						
						<div class="clearfix"></div>
					</div>
				</div>
        </>
    )
}

export default Gallary
