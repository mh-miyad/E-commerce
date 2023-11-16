"use client";
import React, { useState } from "react";
import { Badge, Button, Card } from "keep-react";
import { Heart, ShoppingCart } from "lucide-react";
import tshirt from "../../../public/tshirt.png";
import Image from "next/image";
const CardComp = () => {
  const [isLike, setLike] = useState(false);
  return (
    <div>
      <Card className="max-w-xs overflow-hidden rounded-md">
        <Image src={tshirt} alt="" width={1000} height={1000} />
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart
            size={20}
            className="text-pink-500"
            fill={`${isLike ? "red" : "none"}`}
            onClick={() => setLike(!isLike)}
          />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="xs" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>Men Nike Shoe</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the
              risk of errors.
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray">
              <span className="pr-2">
                <ShoppingCart size={20} />
              </span>
              Add To Cart
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>{" "}
    </div>
  );
};

export default CardComp;
