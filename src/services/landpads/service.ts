export const getLandpadByID = async () => {
    try {
      const response = await fetch(`https://api.spacex.land/rest/landpads`);
  
      if (response.status !== 200) return;
  
      const pad = await response.json();
  
      return pad;
    } catch (e) {
      console.error(e);
    }
  };
  