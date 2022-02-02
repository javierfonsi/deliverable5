const Color = (type) => {
    if(type === 'normal' || type === 1){
      return "#93D6DC";
    } else if(type === 'fighting' || type === 2){
      return "#85E3D7";
    } else if(type === 'flying' || type === 3){
      return "#89EDC6";
    } else if(type === 'poison' || type === 4){
      return "#A2F5AC";
    } else if(type === 'ground' || type === 5){
      return "#00C0AE";
    } else if(type === 'rock' || type === 6){
      return "#F9F871";
    } else if(type === 'bug' || type === 7){
      return "#00A9BE";
    } else if(type === 'ghost' || type === 8){
      return "#93D6DC";
    } else if(type === 'steel' || type === 9){
      return "#EC94C5";
    } else if(type === 'fire' || type === 10){
      return "#70B7FA";
    } else if(type === 'water' || type === 11){
      return "#70b7fa";
    } else if(type === 'grass' || type === 12){
      return "#48D322";
    } else if(type === 'electric' || type === 13){
      return "#FF525C";
    } else if(type === 'phychic' || type === 14){
      return "#a12b6a";
    } else if(type === 'ice' || type === 15){
      return "#86d2f4";
    } else if(type === 'dragon' || type === 16){
      return "#448a94";
    } else if(type === 'dark' || type === 17){
      return "#030706";
    } else if(type === 'fairy' || type === 18){
      return "#981844";
    } else if(type === 'shadow' || type === 19){
      return "#000000";
    } else {
      return "#ffeb3b";
    }
  }

  export default Color;