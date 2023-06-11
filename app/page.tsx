// Components
import { Experiences } from "@/components/experience/Experiences";
import { Formation } from "@/components/formation/Formation";
import { Form } from "@/components/form/Form";

export default function Home() {
  return (
    <main>
      <Experiences />
      <Formation />
      <Form />
    </main>
  );
}
