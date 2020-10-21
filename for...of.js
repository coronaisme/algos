const destruct = () => {
  let animalProps = { name: "bessy", species: "cow", gender: "female" };
  let { name, species, gender } = animalProps;

  //with react then we can do
  // <p>{name}</p> rather than
  // <p>{props.name}</p>

  console.log(name);
  console.log(species);
  console.log(gender);
};

console.log(destruct());
