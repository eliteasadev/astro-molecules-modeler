import AtomIcon from "../../icons/Atom";
import ConnectionIcon from "../../icons/Connection";

function fn (e){
  e.preventDefault()
  console.log("Perfect!")
}

export const options = [
  {
    icon: AtomIcon,
    fn: fn,
  },
  {
    icon: ConnectionIcon,
    fn: fn,
  },
];