import { BiPlusCircle } from "react-icons/bi";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { StyledDiv } from "../../components/Input/Input.style";
import { Label } from "../../components/Label/Label";
import { Layout } from "../../components/Layout/Layout";
import { ListTitle } from "../../components/Title/ListTitle";
import { FormStyledDiv } from "../../components/Button/Button.style";

export default function List () {
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
                            onChange={console.log}
                            placeholder="Digite o item desejado"
                            />
                    </StyledDiv>
                    <Button type="button" onClick={console.log}>
                        <BiPlusCircle size="2.2rem" color="#3893de"/>
                    </Button>
                </FormStyledDiv>
            </form>

        </Layout>
    )
}