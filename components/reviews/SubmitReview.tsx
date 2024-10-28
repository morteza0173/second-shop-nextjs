"use client";
import { useState } from "react";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/reviews/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/action";
import { useUser } from "@clerk/nextjs";

function SubmitReview({ productId }: { productId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <Button size="lg" onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        نظر خود را ثبت کنید
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="authorName"
              value={user?.firstName || "user"}
            />
            <input type="hidden" name="authorImageUrl" value={user?.imageUrl} />
            <RatingInput name="rating" />
            <TextAreaInput name="comment" labelText="نظر خود را در مورد محصول بنویسید" defaultValue="این یک محصول فوق العاده است!"/>
            <SubmitButton className="mt-4"/>
            
          </FormContainer>
        </Card>
      )}
    </div>
  );
}
export default SubmitReview;
