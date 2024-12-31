import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


interface PageheaderProps {
  title: string;
  description: string;
}

function Pageheader({ title, description }: PageheaderProps) {

  return (
    <div className="my-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="flex justify-start">{title}</CardTitle>
       
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end items-center p-0"></CardContent>
      </Card>
    </div>
  );
}

export default Pageheader;
