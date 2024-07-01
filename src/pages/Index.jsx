import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Welcome to Horse Race Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Track your favorite horses, view race stats, and place bets all in one place.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;