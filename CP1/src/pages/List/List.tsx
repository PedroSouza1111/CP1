import { BiPlusCircle } from "react-icons/bi";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { StyledArticle, StyledDiv, StyledParagraph, StyledSection } from "../../components/Input/Input.style";
import { Label } from "../../components/Label/Label";
import { Layout } from "../../components/Layout/Layout";
import { ListTitle } from "../../components/Title/ListTitle";
import { FormStyledDiv } from "../../components/Button/Button.style";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";

export default function List () {

    const [content, setContent] = useState<string>("");
    const [hasContent, setHasContent] = useState<boolean>(false)
    const [values, setValues] = useState<string[]>([])

    const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    const handleClick = () => {
        if (content != "") {
            setHasContent(true)
            setValues([...values, content])
            setContent("")
    }
}

    return (
        <Layout>
            <ListTitle />
            <form>
                <FormStyledDiv>
                    <StyledDiv>
                        <Label></Label>
                        <Input
                            type="text"
                            id="list"
                            name="list"
                            onChange={handleContent}
                            value={content}
                            placeholder="Digite o item desejado"
                            />
                    </StyledDiv>
                    <Button type="button" onClick={handleClick}>
                        <BiPlusCircle size="2.2rem" color="#3893de"/>
                    </Button>
                </FormStyledDiv>
            </form>
                {hasContent 
                ? (
                    <StyledSection>
                    {values.map((value, index) => (
                    <StyledArticle key={index}>
                        <FaRegCircle size="1.2rem" color="#3893de" />
                        <StyledParagraph>{value}</StyledParagraph>
                    </StyledArticle>
                            ))}
                    </StyledSection>
                ) 
                : (null)
                }
        </Layout>
    )
}