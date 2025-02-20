class https{
	
	public api: string = "http://localhost:5000/";
	
	get(route: string){
		fetch(this.api + route)
		.then(data => console.log(data))
		.catch(error => console.error("Erreur lors du get :", error));
	  
	}

	async post(route: string, body: object, token: string){
		try{
		const response = await fetch(this.api + route, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			  "Authorization": token,
			},
			body: JSON.stringify(body),
		  });
	  
		  const data = await response.json();
		  return data
		} catch (error) {
		  console.error("Erreur :", error);
		}
	}
}

export default new https()
