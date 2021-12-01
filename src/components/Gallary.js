import axios from 'axios';
import React, {useEffect, useState} from 'react'
// import p2 from '../assets/images/p2.jpg';
// import p3 from '../assets/images/p3.jpg';
// import p4 from '../assets/images/p4.jpg';
import p111 from '../assets/images/111.jpg';


const Gallary = () => {
	useEffect(() => {
		getGallary ();
	}, [])
	const[bannerss, setGallary] = useState([]);
	const[loading, setLoading] = useState(false);
	const getGallary = async () => {
		try {
			const res = await axios.get(
				"https://uat.ordering-boafresh.ekbana.net/api/v4/newhome",
				{
				  headers: {
					"Api-key":
					  "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
					"Warehouse-Id": "1",
				  },
				}
			);
			setGallary(res.data.data[5].details);
			setLoading(true);
			console.log(bannerss);
		} catch (err) {
			alert(err.message);
		}
	}

	const Baanner = ({baanner}) => {
		return(
			<>
				
						{/* <div class="col-md-6 ban-bottom3">
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
						</div> */}
						<div class="col-md-6 ban-bottom">
							<div class="ban-top">
								<img src={baanner.images} class="img-responsive" alt=""/>
								
							</div>
						</div>
						{/* <div class="col-md-6 ban-bottom">
							<div class="ban-top">
								<img src={p111} class="img-responsive" alt=""/>
								
								
							</div>
						</div> */}
						
						<div class="clearfix"></div>
					
			</>
		)
	}
    return (
        <>
        <div class="ban-bottom-w3l">
			{loading &&
			bannerss.map((baanner) => {
					<div class="container" key={baanner.id} >
						<Baanner baanner = {baanner} />	
					</div>
				})}
		</div>
        </>
    )
}

export default Gallary
