import { Stack } from "@/shared/ui/Stack/Stack";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Stack direction="column" align="center" gap="16">
      <h1>404</h1>
      <p>Page not found</p>

      {/* Вот сюда вставляем Link */}
      <Link to="/">Go back home</Link>
    </Stack>
  );
};

export default NotFoundPage;
