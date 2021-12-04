import axios from 'axios';
import React, {useEffect, useState} from 'react'


function Gallary(){
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
			setGallary(res.data.data[0].details);
			setLoading(true);
			console.log(bannerss);
		} catch (err) {
			alert(err.message);
		}
	}

    return (
		
        <div class="ban-bottom-w3l">
			<div class="container" >
				{loading &&
				bannerss.map((baanner) =>(
							<div class="col-md-6 ban-bottom3">
								<a href = "/Allitems" > 		
								<div class="ban-top">
									<img src={baanner.images} class="img-responsive" /> 
								</div>
								</a >
							</div>
					))}
			</div>
		</div>
    )
}
export default Gallary
