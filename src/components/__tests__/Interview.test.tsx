import { render, screen } from "@testing-library/react";

// Components
import { Interview } from "../Interview/Interview";

test('vérifie que le titre "Bonjour" est présent', () => {
  const component = render(<Interview />);
  const h1 = screen.getByRole("heading", { name: /Bonjour/i });
  // expect(h1).toBeInTheDocument();
});
