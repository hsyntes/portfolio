import Card from "../ui/Card";
import Input from "../ui/Input";

const Signup = () => {
  return (
    <form>
      <Card.Body className="my-12">
        <Input type="text" name="firstname" placeholder="Firstname" />
      </Card.Body>
      <Card.Footer></Card.Footer>
    </form>
  );
};

export default Signup;
