import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Http

type alias Board =
    {
        id: String,
        name: String,
        url: String,
        slug: String,
        username: String
    }
type alias Model =
    List Board

type Action
    = NoOp

-- type alias Mailbox a =
--     {
--         address : Address a,
--         signal : Signal a
--     }

update : Action -> Model -> Model
update action model =
    case action of
        NoOp ->
            model

view : Model -> Html a
view model =
    div [] [ text "Loading" ]
